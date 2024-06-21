## Factory Pattern

3 versions of Factory Pattern
1. Simple factory pattern (It is not Pattern) 
2. Factory Method
3. Abstract Factory Pattern



# 2. Factory Method Pattern

#### The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.


```mermaid 
classDiagram
    Product <|-- ConcreteProduct : ConcreteProduct implements Product
    Creator <|-- ConcreteCreator : ConcreteCreator implements Creator
    ConcreteCreator --> ConcreteProduct
    
    class Creator
     <<Abstract>> Creator
     Creator : factoryMethod()*
     Creator : Operation()
     
   class ConcreteCreator {
      PizzaFactory factory
    + Pizza : orderPizza( type )
   } 

   class Product
      <<Abstract>> Product
  

   class ConcreteProduct {   
   } 

  ```


# 3. Abstract Factory Pattern

#### The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. 

```mermaid 
classDiagram
  ProductA <|-- ConcreteProductA1 : ConcreteProductA1 implements ProductA
  ProductA <|-- ConcreteProductA2 : ConcreteProductA2 implements ProductA
  ProductB <|-- ConcreteProductB1 : ConcreteProductB1 implements ProductB
  ProductB <|-- ConcreteProductB2 : ConcreteProductB2 implements ProductB
  Factory <|-- Factory1 : Factory1 implements Factory
  Factory <|-- Factory2 : Factory2 implements Factory
  Factory1 --> ConcreteProductA1
  Factory1 --> ConcreteProductB1
  Factory2 --> ConcreteProductA2
  Factory2 --> ConcreteProductB2
    
  class Factory
    <<Abstract>> Factory
    Factory : createProductA()*
    Factory : createProductB()*
     
  class Factory1 {
    createProductA()
    createProductB()
  } 

  class Factory2 {
    createProductA()
    createProductB()
  }  

  class ProductA
    <<Abstract>> ProductA
  
  class ConcreteProductA1 {   
  }
    
  class ConcreteProductA2 {   
  }

  class ProductB
    <<Abstract>> ProductB


  class ConcreteProductB1 {   
  } 

  class ConcreteProductB2 {   
  } 

  ```