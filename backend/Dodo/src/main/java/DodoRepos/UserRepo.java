package DodoRepos;

import DodoData.controllers.DodoUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<DodoUser, Integer> {
}
