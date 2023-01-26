package DodoData.models.DodoRepos;

import DodoData.models.Itineraries;
import DodoData.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItineraryRepo extends JpaRepository<Itineraries, Integer>{

}
