//Stretch Exercise 1

// Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
// The class will guess what your object is based on it's properties.

// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 1. Create an empty object called "zoo"

// 2. Create and assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.

// 3. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)

// 4. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.

// 5. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.

// 6. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
// That array should look like this (within the meals object, within the animal object, within the zoo object):
  [ { monday: {
    breakfast: "cheetos on top of greek yogurt",
    lunch: "6 gallons of Diet Coke",
    dinner: "leftover lasagna"
  }},
   {wednesday: {
    breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
    lunch: "a ham and cheddar lunchable",
    dinner: "I put my thing down, flip it, and reverse it"
  }}]

// 6. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.

// 8. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.

// 9. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.

// 10. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.

// 11. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.

// 12. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.

// 13. This joker wants you to add the "hireDate" for each zookeeper. Within the empty array attached to each name, assign a key/value pair of "hireDate" and the value being a string of hire date.

// Stretch exercise 2

// You have a client that runs an online store. They want you to store information about their customers. Create an array of customer objects. Each customer has a name, phone number, address and items they bought. The items they bought should be another array of objects. Each item has a name, price and id number.

// 1. Create an array with four customers, and then give each customer an array of items.

// 2. Write out a way of removing the last item a customer bought.

// 3. add an item to one of your customers

// 4. The price of an item has gone up!!! Change that price for each customer that has bought that item

// 5. Change the address of one of the customers
