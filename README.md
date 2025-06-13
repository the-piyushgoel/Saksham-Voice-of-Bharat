After cloning the repo, To run the project follow the following steps and run all the commands on in terminal step by step:

•	cd .\CodeForBharat\

•	cd .\saksham\

•	mkdir public

•	New-Item -Path "public\.htaccess" -ItemType "File"

•	@'
<IfModule mod_rewrite.c>
 	 RewriteEngine On
 	 RewriteBase /
  	RewriteCond %{REQUEST_FILENAME} !-f
  	RewriteCond %{REQUEST_FILENAME} !-d
  	RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_headers.c>
  	Header set X-Powered-By "Hostinger Horizons"
</IfModule>
'@ | Set-Content -Path "public\.htaccess"

•	npm install

•	npm run dev
