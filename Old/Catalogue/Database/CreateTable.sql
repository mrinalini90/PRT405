CREATE TABLE Users(
       UserID   int   NOT NULL unique IDENTITY(1,1),
       UserName Varchar (20)     NOT NULL unique,
       UserPasssword   varchar(40)  NOT NULL,
       UserRole     Varchar(20)  NOT NULL,
       PRIMARY KEY (UserID)
);
CREATE TABLE Items  
(  
 ItemID int IDENTITY(1,1) unique,  
 ItemName varchar (20),  
 ItemDescription char(1),  
 ItemPrice varchar(30) ,
 UserID nvarchar(128) FOREIGN KEY REFERENCES AspNetUsers(Id),
  PRIMARY KEY (ItemID) 
); 