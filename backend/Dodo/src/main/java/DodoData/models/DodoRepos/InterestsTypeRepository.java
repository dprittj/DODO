package DodoData.models.DodoRepos;

import DodoData.models.InterestsType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestsTypeRepository extends JpaRepository<InterestsType, Integer> {
//    List<InterestsType> CHOICES = new ArrayList<>();
//    static List<InterestsType> findByUserValueTrue(Boolean userValue){
//
//        return CHOICES;
//    }


}

