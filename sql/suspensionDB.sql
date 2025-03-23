CREATE database suspension;
use suspension;
create table vehiculos(
id int not null auto_increment,
marca varchar(50) not null,
modelo varchar(50) not null,
año int not null,
primary key(id)
);

create table modelosaños(
id int not null auto_increment,
modeloID int not null,
año int not null,
primary key (id),
foreign key(modeloID) references vehiculos(id) 
);

create table balljoints(
id int not null auto_increment,
añoID int not null,
refJoint varchar(20),
refJointSup varchar(20),
refJointInf varchar (20),
refJointInf_izq varchar (20),
refJointInf_der varchar (20),
primary key (id),
foreign key (añoID) references modelosaños(id)
);


								-- CREATE --

-- vehiculos
insert into vehiculos (marca, modelo, año) value ("Toyota", "4Runner", 2015);
insert into vehiculos (marca, modelo, año) value ("Toyota", "Camry", 2011);
insert into vehiculos (marca, modelo, año) value ("Nissan", "Xterra", 2010);
insert into vehiculos (marca, modelo) values ("Toyota","Corolla");
insert into vehiculos (marca, modelo) values ("Toyota", "Highlander");
insert into vehiculos (marca, modelo) values ("Toyota", "Land Cruiser Prado");
insert into vehiculos (marca, modelo) values ("Toyota", "Rav4");
insert into vehiculos (marca, modelo) values ("Honda", "Accord");
insert into vehiculos (marca, modelo) values ("Honda", "Civic");
insert into vehiculos (marca, modelo) values ("Honda", "CR-V");
insert into vehiculos (marca, modelo) values ("Honda", "Fit");
insert into vehiculos (marca, modelo) values ("Honda", "Odyssey");
insert into vehiculos (marca, modelo) values ("Honda", "Piilot");


-- modelosaños
insert into modelosaños (modeloID, año) value (1, "1986-1995");
insert into modelosaños (modeloID, año) value (1, "1886-1888"); 
insert into modelosaños (modeloID, año) value (1, "1989-1995");
insert into modelosaños (modeloID, año) value (1, "1996-2002");
insert into modelosaños (modeloID, año)
	value
		(1, "2003-2019"),
        (1, "2010-2019");
        
        
insert into modelosaños (modeloID, año) value (2, "2001-2006"); 
insert into modelosaños (modeloID, año)	value (2, "2007-20017");
insert into modelosaños (modeloID, año) values (2,"1986-1995");
insert into modelosaños (modeloID, año) values (3, "1996-2008");
insert into modelosaños (modeloID, año)
	values
		(3, "2009-2019");
insert into modelosaños (modeloID, año) values (5, "2001-2007");
insert into modelosaños (modeloID, año) values	
	(6,"1996-2002"),
    (6,"2003-2008");
insert into modelosaños (modeloID, año) 
		values
			(7, "2001-2005"),
            (7, "2006-2018");
insert into modelosaños (modeloID, año) 
	values
		(8, "1994-2002"),
        (8, "2003-2007"),
        (8, "2008-20012"),
        (8, "2013-2016");
insert into modelosaños (modeloID, año)
		values
			(9, "1992-2000"),
            (9, "2001-2005"),
            (9, "2006-2011"),
            (9, "2012-2016"); 
insert into modelosaños (modeloID, año) 
	values 	
		(10,"1997-2001"),
        (10, "2002-2006"),
        (10, "2007-2016");
        
insert into modelosaños (modeloID, año) 
	values
		(11, "2006-2008"),
        (11, "2009-2014");
        
insert into modelosaños (modeloID, año) values (12, "1995-1998");        
insert into modelosaños (modeloID, año ) values (12, "1999-2003");   
insert into modelosaños (modeloID, año) values (13, "2003-2008");
     
-- ball joints
insert into balljoints (añoID, refJointSup) value (1, "43360-39075");
insert into balljoints (añoID, refJointInf) values(2, "43330-39195");
insert into balljoints (añoID, refJointInf) values(7, "43330-39265");
insert into balljoints (añoID, refJointSup, refJointInf_izq, refJointInf_der) values (4, "43310-39016","43340-39465","43330-39585");
insert into balljoints (añoID, refjointSup, refJointInf) values (5, "43310-60050", "43330-60010");
insert into balljoints (añoID, refjointInf) values (6,"43330-60040");


insert into balljoints (añoID,  refJointInf_izq, refJointInf_der) value (3, "43340-29175", "43330-29405");
insert into balljoints (añoID, refjointInf_izq, refJointInf_der) values (8, "43330-09040","43330-09330");
insert into balljoints (añoID, refjointInf) values (9, "error");
insert into balljoints (añoID, refjointInf)
	values
		(15, "43330-19115"),
		(16, "43330-09190");
insert into balljoints (añoID, refJointInf_izq, refJointInf_der) value (17, "43340-29175","43330-29405");        
insert into balljoints (añoID, refJointInf_izq, refJointInf_der) value(18, "43340-39465", "43330-39585");
insert into balljoints (añoID, refJointInf) values (19, "43330-60010");
insert into balljoints (añoID, refJointInf)
	values
		(20, "43330-19115"),
		(21, "43330-49095");
insert into balljoints (añoID, refJointInf, refJointSup)
	values
		(22, "51220-SM1-A02", NULL),
        (23, "51220-SDA-A02","51270-SR3-003"),
        (24, "51220-TA0-A02", "51270-SR3-003"),
        (25, "51220-T2A-A02", NULL);
insert into balljoints (añoID, refJointInf, refJointSup)
		values	
			(26, "51220-SR3-003", "51270-SR3-003"),
            (27, "51220-S5A-J10", null);
insert into balljoints (añoID, refJointInf_izq, refJointInf_der) values (28, "51230-SNA-A03","51220-SNA-A03");
insert into balljoints (añoID, refJointInf) values (29, "51220-TR0-A01");            
 insert into balljoints (añoID, refJointInf, refJointSup)
	values
		(30, "51220-SR3-003", "51270-SR3-003"),
        (31, "51220-S9A-982", NULL),
        (32, "51220-STK-A01",NULL);
insert into balljoints (añoID, refJointInf)
			values	
				(33, "51220-SEL-T01"),
                (34, "51220-TK6-A01");
insert into balljoints (añoID, refJointInf) values (35, "51220-SM1-A02");
insert into balljoints (añoID, refJointInf) values (36, "51220-S0X-A01");
insert into balljoints (añoID, refJointInf) values (37, "51220-S3V-A01");

								-- READ --
select * from vehiculos;
select modelosaños.id,modelosaños.año, vehiculos.modelo from modelosaños left join vehiculos on modelosaños.modeloID = vehiculos.id;
select * from modelosaños;
select * from modelosaños where modeloID = 1;
select * from balljoints;
select vehiculos.id, vehiculos.modelo, modelosaños.año from modelosaños left join vehiculos on modelosaños.modeloID =  vehiculos.id;
select modelosaños.id,modelosaños.año  from vehiculos left join modelosaños on modelosaños.modeloID = vehiculos.id where vehiculos.id =1;
select modelosaños.año from vehiculos left join modelosaños on modelosaños.modeloID = vehiculos.id where vehiculos.modelo = "4Runner";
select b.refJoint, b.refJointSup, b.refJointInf, b.refJointInf_izq, b.refJointInf_der, modelosaños.año from balljoints b left join modelosaños on modelosaños.id = b.añoID; -- where modelosaños.id = 1;
select b.id, b.refJointSup, b.refJointInf, b.refJointInf_izq, b.refJointInf_der,modelosaños.año, vehiculos.modelo from balljoints b left join modelosaños on modelosaños.id = b.añoID left join vehiculos on modelosaños.modeloID = vehiculos.id;
show tables;
describe modelosaños;
show create table modelosaños;
								-- UPDATE --
alter table modelosaños modify column año varchar(10);
update vehiculos set id = 3 where id = 4;
update modelosaños set año = "1986-1988" where id = 2;
update  balljoints set id = 2 where id = 3;
update balljoints set id = 3 where id = 5;
update modelosaños set año = "2012-2015" where id = 29;
update modelosaños set año = "2008-2012" where id = 24;

								-- DELETE --
alter table vehiculos drop column año;
delete from balljoints where id = 2;
delete  from balljoints where id = 6;
delete from balljoints where id = 4;
delete from balljoints where id = 10;
delete from balljoints where id = 13;
delete from modelosaños where id = 9;
alter table balljoints drop column refJoint;
DROP TABLE balljoints;
drop table modelosaños;
delete from vehiculos where id = 3;
delete from modelosaños where id = 14;
delete from balljoints where id = 28;
delete from vehiculos where id = 10;
delete from balljoints where id = 37;








