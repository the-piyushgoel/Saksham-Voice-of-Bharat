After cloning the repo, To run the project follow the following steps and run all the commands on in terminal step by step:

1)	cd .\CodeForBharat\

2)	cd .\saksham\

3)	mkdir public

4)	New-Item -Path "public\.htaccess" -ItemType "File"

5)	@'

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

'@ |
Set-Content -Path "public\.htaccess"

6)	npm install

7)	npm run dev
