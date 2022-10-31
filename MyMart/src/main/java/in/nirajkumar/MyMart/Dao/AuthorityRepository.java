package in.nirajkumar.MyMart.Dao;

import in.nirajkumar.MyMart.Model.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Integer> {

    public Authority findByRoleCode(String roleCode);
}
