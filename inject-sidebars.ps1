$root = "C:\Claude\FinCalcSmart-Website\FinCalcSmart"

# Calculator pages
Get-ChildItem -Path "$root\calculators" -Filter "*.html" | ForEach-Object {
  $f = $_.FullName
  $c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

  # Insert <div class="calc-sidebar"></div> between </div>\n</div>\n<script>
  # This inserts it between calc-main closing and calc-wrapper closing
  $pattern = "(`n</div>`n)(</div>`n<script>)"
  $replacement = "`$1<div class=`"calc-sidebar`"></div>`n`$2"
  $newc = [regex]::Replace($c, $pattern, $replacement)

  # Add sidebar.js before </body> if not already there
  if ($newc -notmatch 'sidebar\.js') {
    $newc = $newc -replace '</body>', "<script src=`"../sidebar.js`"></script>`n</body>"
  }

  [System.IO.File]::WriteAllText($f, $newc, [System.Text.Encoding]::UTF8)
  Write-Host "Calc: $($_.Name)"
}

# Blog pages (skip index.html)
Get-ChildItem -Path "$root\blog" -Filter "*.html" | Where-Object { $_.Name -ne "index.html" } | ForEach-Object {
  $f = $_.FullName
  $c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

  # Insert <div class="article-sidebar"></div> before </div>\n<script src="../shared.js">
  $pattern = "(`n</div>`n)(<script src=`"\.\.\/shared\.js`")"
  $replacement = "`$1<div class=`"article-sidebar`"></div>`n`$2"
  $newc = [regex]::Replace($c, $pattern, $replacement)

  # Add sidebar.js before shared.js script tag
  if ($newc -notmatch 'sidebar\.js') {
    $newc = $newc -replace '<script src="\.\.\/shared\.js">', "<script src=`"../sidebar.js`"></script>`n<script src=`"../shared.js`">"
  }

  [System.IO.File]::WriteAllText($f, $newc, [System.Text.Encoding]::UTF8)
  Write-Host "Blog: $($_.Name)"
}
