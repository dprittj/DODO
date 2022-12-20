package DodoData.models.DodoRepos;

import DodoData.models.InterestsType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestsRepo extends CrudRepository<InterestsType, Integer> {
}

