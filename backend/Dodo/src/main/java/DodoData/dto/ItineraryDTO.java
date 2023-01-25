package DodoData.dto;

public class ItineraryDTO {


    static String placeName;

    static String placeHours;

    static String placeAddress;

    String[] itinerary = new String[3];

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
