# Assignment Overview
Create an Express based REST API for a Widget Store. Each widget has a single brand. A brand can have multiple widgets.

# The Models

## Widget

The following are the attributes for the widget
* name {string}, max length 256 characters
* quantity {integer}, number of widgets available
* brandId {uuid}, foreign key for brand 

## Brand

The following are the attributes for the brand
* name {string}, max length 256 characters
* lastSoldAt {date}, date when the widget was last sold, should update if widget quantity decreases

# Required REST Capabilities 

The REST API should support the following capabilities:

1. Create a widget
1. List all widgets
2. Get a widget   
3. Update a widget including incrementing the quantity of a widget
4. Delete a brand (which should delete all associated widgets)

# Useful commands

## To initialize the database schema

Initializes the Widget and Brand tables

```
npx sequelize-cli db:migrate
```

## Seed the Database

Run this command to add some test data to the tables

```
npx sequelize db:seed:all
```

## Remove Test Data 

Removes all data from the tables

```
npx sequelize db:seed:undo
```

# Helpful Documentation

## node-sqllite documentation

https://github.com/mapbox/node-sqlite3/wiki

## Express

https://expressjs.com/

## Sequelize

https://sequelize.org/master/

sequelize-cli 

# SQlLite CLI Tool

We've provided precompiled 32 binaries for Linux, macos, and windows if you want to use the sqlite3 command line interface to view data in the database.  

The following commands assume they are being run from the project's root folder.

## Window Example

```
.\cli\win32\sqlite3.exe .\db\inventory.sqlite
```

## macos Example

```
./cli/macos/sqlite3 ./db/inventory.sqlite
```

## Linux Example
```
./cli/linux-x86/sqlite3 ./db/inventory.sqlite
```

> Note that you will need support for 32 bit binaries on Linux which requires installing the following library:

> ctrl-d will exit the cli tool

### RHEL/CentOS 7

```
sudo yum install glibc.i686
```

### Ubuntu 

```
sudo apt-get install ia32-libs
```




