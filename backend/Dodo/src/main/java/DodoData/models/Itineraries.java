package DodoData.models;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Table(name="Itineraries")
public class Itineraries extends IdAbstract{

    static String placeName;

    static String placeHours;

    static String placeAddress;

    String[] itinerary = new String[3];

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
