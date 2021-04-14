# Assignment Overview
Create an Express based REST API for a Widget Store.  The widget store has 1 or more widgets and each widget has a single brand. A brand can have multiple widgets. 

# The Models

## Widget

The following are the attributes for the widget
* name
* quantity
* brand

## Brand

The following are the attributes for the brand
* name
* last_sold -- date when the widget was last sold

# Required REST Capabilities 

The store should support the following capabilities:

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

