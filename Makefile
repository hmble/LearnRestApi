connect_db:
	mysql -u root -phumblesam

sqlrun:
	mysql -u root -phumblesam < $(ARGS)
.PHONY:
	connect_db
	sqlrun
