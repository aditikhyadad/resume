//FINAL_PROJECT

#include<iostream>
#include<string.h>
#include<algorithm>
using namespace std;
string Loc[]={"BVB","VIDYANAGAR","KIMS","HOSURBUSTTAND","HOSURCROSS",
                "CHENNAMMACIRCLE", "CORPORATIONAREA", "AMBEDKARCIRCLE",
                "COURTCIRCLE", "RAILWAYSTATION", "OUTSKIRTS"};

class Route
{
public:
    string source;
    string destination;

    Route(){}
    Route(string src, string dest):source(src),destination(dest){}

    void readSource()
    {
        int validSource=0;
        cout<<"SOURCE(FROM) :";
        cin>>source;
        for(int i=0;i<11;i++)
        {
            transform(source.begin(),source.end(),source.begin(),::toupper);
            if (source==Loc[i])
            {
                validSource=1;
                break;
            }
        }
        if (!validSource)
        {
            cout << "SOURCE INVALID. "<<endl;
            cout<<"ENTER THE CORRECT SPELLING AS GIVEN IN THE LIST"<<endl;
            readSource();
            return;
        }
    }
    void readDestination()
    {
        int validDestination=0;
        cout<<"DESTINATION(TO) :";
        cin>>destination;
        for(int i=0;i<11;i++)
        {
            transform(destination.begin(),destination.end(),destination.begin(),::toupper);
            if(destination==Loc[i])
            {
                validDestination=1;
                break;
            }
        }
        if(!validDestination)
        {
            cout<<"DESTINATION INVALID. "<<endl;
            cout<<"ENTER THE CORRECT SPELLING AS GIVEN IN THE LIST"<<endl;
            readDestination();
            return;
        }
    }
    int checkRoute()
    {
        if (source==destination)
        {
            cout<<"SOURCE AND DESTINATION CANNOT BE SAME.PLEASE ENTER VALID DETAILS."<<endl;
            readSource();
            readDestination();
        }
        else
        {
            cout<<"VALID ROUTE!!"<<endl;
            cout<<"ROUTE IS FROM "<<source<<" TO "<<destination<<endl;
            return 0;
        }
    }
};
class Car
{
public:
    string carType;
    string carNo;
    float pricePerKm;
    int maxSeats;

    Car(){}
    Car(string type,string no,int seats,float price)
    :carType(type),carNo(no),maxSeats(seats),pricePerKm(price){}

    void display()
    {
        cout<<"Car Details:"<<endl;
        cout<<"TYPE: "<<carType<<endl;
        cout<<"CAR NUMBER: "<<carNo<<endl;
        cout<<"MAXIMUM SEATS: "<<maxSeats<<endl;
        cout<<"PRICE PER KM: "<<endl;
    }
};
class Ride
{
public:
    public:
    Route route;
    Car car;
    int availableSeats; // Current number of available seats in the car
    int nos;            // Maximum seats in the car

    Ride() {}
    Ride(int seats)
        : availableSeats(availableSeats), nos(seats) {}
    void countRemaining()
    {
        cout<<"REMAINING SEATS "<<nos<<endl;
    }
};
class ExceptionHandler
{
public:

   int checkAdhaarNo(string adhaarNumber)
    {
    try {
        int i;
        if (adhaarNumber.length()!=12)
        {
            cout<<"ADHAAR NUMBER PLATE SHOULD BE TWELVE CHARACTERS LONG." << endl;
            throw 0;
        }
        for(i=0; i<12; i++)
        {
            if(!isdigit(adhaarNumber[i]))
            {
                throw 1;
            }
        }
        //cout<<"VALID"<<endl;
        return 1;
      }
      catch(int e)
      {
        if(e==0)
            cout<<"RE-ENTER THE ADHAAR NUMBER."<<endl;
        else if(e==1)
            cout<<"ALL THE CHARACTERS OF ADHHAR NUMBER SHOULD BE DIGITS."<<endl;
        return 0;
      }
     }
     void checkAge(int age)
     {
      try
      {
          if(age>18)
          {
              cout<<"Valid dl"<<endl;
          }
          else
            throw(age);

      }
      catch(int age)
      {
cout<<age<<endl;
          cout<<"INVALID DL HENCE,CANNOT BOOK"<<endl;
      }
    }
    int checkDl(string license)
    {
    try {
        int i;
        if (license.length()!=9)
        {
            cout<<"DRIVER'S LICENSE SHOULD BE NINE CHARACTERS LONG." << endl;
            throw 0;
        }
        for(i=0; i<5; i++)
        {
            if(!isdigit(license[i]))
            {
                throw 1;
            }
        }
        for(i=5; i<9; i++)
        {
            if(!isalpha(license[i]))
            {
                throw 2;
            }
        }
        //cout << "VALID" << endl;
        return 1;
    }
    catch(int e)
    {
        if(e==0)
            cout<<"RE-ENTER THE DRIVER LICENSE NUMBER."<<endl;
        else if(e==1)
            cout<<"THE FIRST FIVE CHARACTERS SHOULD BE DIGITS."<<endl;
        else if(e==2)
            cout<<"THE LAST OUR CHARACTERS HSHOULD BE LETTERS1."<<endl;
        return 0;
    }
   }

   int checkCarNo(string carNumber)
    {
    try {
        int i;
        if (carNumber.length()!=9)
        {
            cout<<"CAR NUMBER PLATE SHOULD BE NINE CHARACTERS LONG." << endl;
            throw 0;
        }
        for(i=0; i<2; i++)
        {
            if(!isalpha(carNumber[i]))
            {
                throw 1;
            }
        }
        for(i=2; i<4; i++)
        {
            if(!isdigit(carNumber[i]))
            {
                throw 2;
            }
        }
        for(i=4; i<5; i++)
        {
            if(!isalpha(carNumber[i]))
            {
                throw 3;
            }
        }
        for(i=5; i<9; i++)
        {
            if(!isdigit(carNumber[i]))
            {
                throw 4;
            }
        }
        //cout<<"VALID"<<endl;
        return 1;
    }
    catch(int e)
    {
        if(e==0)
            cout<<"RE-ENTER THE CAR NUMBER."<<endl;
        else if(e==1)
            cout<<"THE FIRST TWO CHARACTERS SHOULD BE LETTERS."<<endl;
        else if(e==2)
            cout<<"THE THIRD AND FORTH CHARACTERS SHOULD BE DIGITS."<<endl;
        else if(e==3)
            cout<<"THE FIFTH CHARACTER HSHOULD BE LETTER."<<endl;
        else if(e==4)
            cout<<"THE LAST FOUR CHARACTERS SHOULD BE DIGITS."<<endl;
        return 0;
    }
   }

};
class User
{
public:
    string name;
    string adhaarNumber;
    ExceptionHandler exceptionhandler;

    User() : name(""){}
    User(string n,string adhaar)
    : name(n),adhaarNumber(adhaar){}
    virtual ~User() {}

    void read()
    {
        cout<<"NAME : ";
        cin>>name;
        int validAdhaar=0;
        while(!validAdhaar)
        {
            cout<<"AADHAR CARD NUMBER(12 DIGITS LONG) : ";
            cin>>adhaarNumber;
            validAdhaar=exceptionhandler.checkAdhaarNo(adhaarNumber);
        }
        cout<<endl;
    }
    virtual void display()
    {
        cout<<"NAME : "<<name<<endl;
        cout<<"ADHAAR NUMBER : "<<adhaarNumber<<endl;
    }
};
class Driver:public User
{
public:
    int age;
    string carNumber;
    string license;

    Route route;
    Car car;
    Ride ride;
    ExceptionHandler exceptionhandler;
    int stdr, destdr;

    Driver(){}
    Driver(string n,string adhaar,int age,string carno,string license)
    :User(n,adhaar),carNumber(carno),license(license){}

    void read()
    {
        User::read();
        while(1)
        {
            cout<<"AGE:(GREATER THAN 18) ";
            cin>>age;
            if(age>18)
            {
                this->age=age;//Update the age in the User class
                break;
            }
            else
            {
                cout<<"DRIVER'S AGE SHOULD BE GREATER THAN 18. RE-ENTER VALID AGE"<<endl;
            }
        }
        int validCar=0;
        while(!validCar)
        {
            cout<<"CAR NUMBER(EXAMPLE-AA11A1111): ";
cin>>carNumber;
            validCar=exceptionhandler.checkCarNo(carNumber);
        }
        cout<<"MAXIMUM SEATS IN THE CAR(WITHOUT THE DRIVER): ";
        cin>>ride.nos;
        int validLicense=0;
        while (!validLicense)
        {
            cout<<"LICENSE NUMBER(EXAMPLE-11111AAAA): ";
            cin>>license;
            validLicense=exceptionhandler.checkDl(license);
        }
        cout<<endl<<"AVAVILABLE LOCATIONS ARE:VIDYANAGAR,KIMS,HOSURBUSTTAND,HOSURCROSS";
        cout<<",CHENNAMMACIRCLE,CORPORATIONAREA,AMBEDKARCIRCLE,COURTCIRCLE,RAILWAYSTATION,OUTSKIRTS"<<endl;
        route.readSource();
        route.readDestination();
        route.checkRoute();
        cout<<"PRICE PER KM: ";
        cin>>car.pricePerKm;
    }
     void display()
    {
        User::display();
        cout<<"AGE: "<<age<<endl;
        cout<<"CAR NUMBER: "<<carNumber<<endl;
        cout<<"MAXIMUM SEATS IN THE CAR(WITHOUT THE DRIVER): "<<ride.nos;
        cout<<"SOURCE(FROM): "<<route.source<<endl;
        cout<<"DESTINATION(TO): "<<route.destination<<endl;
        cout<<"PRICE PER KM: "<<car.pricePerKm<<endl;
        cout<<"********"<<endl;
    }
};
class Passenger:public User
{
public:
    int nop;
    int age;
    Route route;
    int stp,destp;
    int driverIndex;

    Passenger(){}
    Passenger(string n,string adhaar,int passengers,int a)
    :User(n,adhaar),nop(passengers),age(a){}
    void read()
    {
        User::read();
        cout<<"AGE: ";
        cin>>age;
        cout<<"NO OF PASSENGERS: ";
        cin>>nop;
        cout<<endl<<"AVAVILABLE LOCATIONS ARE:VIDYANAGAR,KIMS,HOSURBUSTTAND,HOSURCROSS";
        cout<<",CHENNAMMACIRCLE,CORPORATIONAREA,AMBEDKARCIRCLE,COURTCIRCLE,RAILWAYSTATION,OUTSKIRTS"<<endl;
        route.readSource();
        route.readDestination();
        route.checkRoute();
    }
    void display()
    {
        User::display();
        cout<<"Passenger Details:"<<endl;
        cout<<"AGE: "<<age<<endl;
        cout<<"SOURCE(FROM) : "<<route.source<<endl;
        cout<<"DESTINATION(TO) : "<<route.destination<<endl;
        cout<<"NO OF PASSENGERS: "<<nop<< endl;
    }
};
int main()
{
    Driver D[100];
    Passenger P[100];
    ExceptionHandler exceptionhandler;
    int choice,d=0,p=0,confirmchoice;
    int flag=0;
    cout<<"<============WELCOME TO CARPOOLING SYSTEM===========>"<<endl;
    START:
        confirmchoice=0,flag=0;
    cout<<"Enter 1 to enter as a DRIVER"<<endl;
    cout<<"Enter 2 to enter as a PASSENGER"<<endl;
    cout<<"Enter 3 to EXIT the program"<<endl;
    cout<<"ENTER YOUR CHOICE : ";
    cin>>choice;
    cout<<"********"<<endl;
    cout<<endl;

    switch(choice)
    {
    case 1:
            {
                D[d].read();
                cout<<"********"<<endl;
                cout<<"   THE DRIVER "<<d+1<<" DETAILS ARE  "<<endl;
                cout<<"********"<<endl;
                D[d].display();
                for(int i=0;i<11;i++)
                {
                    if(D[d].route.source.compare(Loc[i])==0)
                    {
                        D[d].stdr=i;
                    }
                    if(D[d].route.destination.compare(Loc[i])==0)
                    {
                        D[d].destdr=i;
                    }
                }
            d++;
            cout<<"********"<<endl;
            goto START;
            }

    case 2:
            {
                P[p].read();
                cout<<"********"<<endl;
                cout<<"  THE PASSENGER "<<p+1<<" DETAILS ARE: "<<endl;
                cout<<"********"<<endl;
P[p].display();
                for(int i=0;i<11;i++)
                {
                    if(P[p].route.source.compare(Loc[i])==0)
                    {
                        P[p].stp=i;
                    }
                    if(P[p].route.destination.compare(Loc[i])==0)
                    {
                        P[p].destp=i;
                    }
                }
                break;
            }
    case 3:
            {
                goto EXIT;
            }

    default:
            {
                cout<<"INVALID CHOICE"<<endl;
                goto START;
            }
    }
    cout<<"**> AVAILABLE RIDES <*****"<<endl;
    if(P[p].stp>P[p].destp)
    {
        for(int i=0;i<d;i++)
        {
            if(D[i].stdr>D[i].destdr && D[i].ride.nos!=0)
            {
                if(P[p].stp<=D[i].stdr && P[p].destp>=D[i].destdr && P[p].nop<=D[i].ride.nos )
                {
                    D[i].display();
                    cout<<"ENTER "<<i+1<<" TO CONFIRM YOUR RIDE WITH "<<D[i].name<<" OR 0 TO TO NOT CONFIRM IT"<<endl;
                    cout<<"********"<<endl;
                    flag = 1;

                }
            }

        }
    }
    else
    {
        if(P[p].stp<P[p].destp)
        {
            for(int i=0;i<d;i++)
            {
                if(D[i].stdr<D[i].destdr && D[i].ride.nos!=0)
                {
                    if(P[p].stp>=D[i].stdr && P[p].destp<=D[i].destdr && P[p].nop<=D[i].ride.nos )
                    {
                        D[i].display();
                        cout<<"ENTER "<<i+1<<" TO CONFIRM YOUR RIDE WITH "<<D[i].name<<" OR 0 TO TO NOT CONFIRM IT"<<endl;
                        cout<<"********"<<endl;
                        flag=1;
                    }
                }
            }
        }
    }
    if(flag==1)
    {
        cin>>confirmchoice;
        if(confirmchoice!=0)
        {
            if(D[confirmchoice-1].ride.availableSeats>=P[p].nop)
            {
                D[confirmchoice-1].ride.availableSeats-=P[p].nop;
                P[p].driverIndex=confirmchoice-1; // Store the driver index for the passenger.

                cout<<"************"<<endl;
                cout<<"YOUR RIDE WITH "<<D[confirmchoice-1].name<<" HAS BEN CONFIRMED"<<endl;
                cout<<"THANK YOU FOR USING OUR CARPOOL SYSTEM.HAVE A SAFE JOURNEY"<<endl;
                cout<<"                 DO VISIT AGAIN                 "<<endl;
                cout<<"************"<<endl;
                // Check if there are available seats and if the passenger wants to book more seats.
                while(D[confirmchoice-1].ride.availableSeats>0)
                {
                    cout<<"THE CAR HAS "<<D[confirmchoice-1].ride.availableSeats<<" MORE AVAILABLE SEATS.DO YOU WANT TO BOOK MORE SEATS?( 1-YES AND 0-NO )";
                    int bookMoreSeats;
                    cin>>bookMoreSeats;
                    if (bookMoreSeats == 1)
                    {
                        int additionalSeats;
                        cout<<"HOW MANY ADDITIONAL SEATS DO YOU WANT TO BOOK? ";
                        cin>>additionalSeats;
                        if(additionalSeats<=D[confirmchoice-1].ride.availableSeats)
                        {
                            D[confirmchoice-1].ride.availableSeats-=additionalSeats;
                            P[p].nop+=additionalSeats;
                            cout<<"ADDITIONAL "<<additionalSeats<<" SEATS BOOKED.TOTAL SEATS NOW: "<<P[p].nop<<endl;
                        }
                        else
                        {
                            cout<<"INVALID INPUT!!THE CAR DOES NOT HAVE THOSE MANY SEATS AVAILABLE"<<endl;
}
                    }
                    else if(bookMoreSeats==0)
                    {
                        break;
                    }
                    else
                    {
                        cout<<"INVALID INPUT!!( 1-YES AND 0-NO )"<<endl;
                    }
                }
            }
            else
            {
                cout<<"************"<<endl;
                cout<<"YOUR RIDE WITH "<<D[confirmchoice-1].name<<" HAS BEEN CONFIRMED"<<endl;
                cout<<"     THANK YOU FOR USING OUR CARPOOL SYSTEM      "<<endl;
                cout<<"        HAVE A SAFE JOURNEY                      "<<endl;
                cout<<"           DO VISIT AGAIN                        "<<endl;
                cout<<"************"<<endl;
            }
        }
        else
        {
            cout<<"*************"<<endl;
            cout<<"     THANK YOU FOR USING OUR CARPOOL SYSTEM      "<<endl;
            cout<<"                 DO VISIT AGAIN                  "<<endl;
            cout<<"*************"<<endl;
        }
    }
    else
    {
        cout<<"SORRY...!!!NO RIDES AVAILABLE"<<endl;
        cout<<"PLEASE TRY AGIAN";
        cout<<"*********"<<endl<<endl;
    }
    goto START;
    EXIT:
        cout<<"EXITING FROM THE CARPOOL SYSTEM";
}
