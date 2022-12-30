package DodoData;

import DodoData.models.InterestsType;
import DodoData.models.DodoRepos.InterestsRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DodoApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void interestsPopulate() {

		new InterestsType(1, "hiking", true);

	}


}
