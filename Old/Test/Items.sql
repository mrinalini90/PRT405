CREATE TABLE [dbo].[Items] (
    [Id]       INT IDENTITY(1,1)            NOT NULL,
    [Name]     VARCHAR (50)    NULL,
    [Category] NVARCHAR (50)   NULL,
    [Price]    DECIMAL (10, 2) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
	UserID nvarchar(128) FOREIGN KEY REFERENCES AspNetUsers(Id)
);

