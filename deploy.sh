scp -i $1 -r target/HelloWorld-0.0.1-SNAPSHOT.war "ubuntu@raimbek-rakhimbekov.ru:ROOT.war"
ssh -i $1 ubuntu@raimbek-rakhimbekov.ru "sudo rm -f /var/lib/tomcat8/webapps/*.war"
ssh -i $1 ubuntu@raimbek-rakhimbekov.ru "sudo rm -rf /var/lib/tomcat8/webapps/ROOT/"
ssh -i $1 ubuntu@raimbek-rakhimbekov.ru "sudo mv ROOT.war /var/lib/tomcat8/webapps/"
