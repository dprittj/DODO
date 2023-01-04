package DodoData.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.Objects;

@MappedSuperclass //a persistence annotation, maps field 'id' into child classes, ie into the persistent data tables of the other classes
public abstract class IdAbstract {

    @Id
    @GeneratedValue
    private Integer id;

    public Integer getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IdAbstract that = (IdAbstract) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
