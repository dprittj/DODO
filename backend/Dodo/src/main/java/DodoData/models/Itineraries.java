package DodoData.models;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Table(name="Itineraries")
public class Itineraries extends IdAbstract{

//    @OneToMany
////    @JoinTable(name="User", joinColumns =
//    @JoinColumn(name="user_id")
    String[] itinerary = new String[3];

    static String placeName;

    static String placeHours;

    static String placeAddress;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }

    public Itineraries(String placeName, String placeHours, String placeAddress) {
        this.itinerary[0] = this.placeName;
        this.itinerary[1] = this.placeHours;
        this.itinerary[2] = this.placeAddress;
    }

    public Itineraries(){
    };

    public Itineraries(String[] itinerary) {
        super();
    }

    public static String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public static String getPlaceHours() {
        return placeHours;
    }

    public void setPlaceHours(String placeHours) {
        this.placeHours = placeHours;
    }

    public static String getPlaceAddress() {
        return placeAddress;
    }

    public void setPlaceAddress(String placeAddress) {
        this.placeAddress = placeAddress;
    }

    public String[] getItinerary() {
        return itinerary;
    }

    public void setItinerary(String[] itinerary) {
        this.itinerary = itinerary;
    }
}
