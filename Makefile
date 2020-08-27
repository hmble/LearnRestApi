connect_db:
	mysql -u root -phumblesam -D test2

sqlrun:
	mysql -u root -phumblesam < $(ARGS)
.PHONY:
	connect_db
	sqlrun
