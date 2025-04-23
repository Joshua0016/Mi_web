CREATE database suspension;
use suspension;
create table marcas(
id int not null auto_increment,
nombre varchar(50) not null,
modelo varchar(50) not null,
primary key(id)
);

create table modelos_años(
id int not null auto_increment,
modelo_id int not null,
año varchar(10) not null,
primary key (id),
foreign key(modelo_id) references marcas(id) 
);

create table balljoints(
id int not null auto_increment,
añoID int not null,
-- Referencias 
refJoint varchar(20), -- Algunos vehículos solo tienen una sola "balljoint
refJointSup varchar(20), -- Superior
refJointInf varchar (20),	-- Inferior
refJointInf_izq varchar (20), -- Inferior izquierda
refJointInf_der varchar (20), -- Inferior derecha
primary key (id),
foreign key (añoID) references modelos_años(id)
);


								-- CREATE --

-- marcas
insert into vehiculos (marca, modelo) values ("Honda", "Odyssey");
insert into vehiculos (marca, modelo) values ("Honda", "Piilot");


-- modelos_años
											--
insert into modelos_años (modelo_id, año ) values (12, "1999-2003");   
insert into modelos_años (modelo_id, año) values (13, "2003-2008");
     
-- ball joints

insert into balljoints (añoID, refJointInf) values (35, "51220-SM1-A02");
insert into balljoints (añoID, refJointInf) values (36, "51220-S0X-A01");
insert into balljoints (añoID, refJointInf) values (37, "51220-S3V-A01");

								-- READ --
select * from marcas where nombre = 'Toyota';
select * from marcas where nombre = "Honda";
select * from balljoints b left join modelos_años on modelos_años.id = b.añoID where modelos_años.id = 5;






