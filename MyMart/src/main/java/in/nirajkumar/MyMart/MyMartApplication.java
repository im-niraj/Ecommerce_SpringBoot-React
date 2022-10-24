package in.nirajkumar.MyMart;

import in.nirajkumar.MyMart.Dao.UserRepository;
import in.nirajkumar.MyMart.Model.Authority;
import in.nirajkumar.MyMart.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class MyMartApplication {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(MyMartApplication.class, args);

	}


//	@PostConstruct
//	protected void init() {
//		List<Authority> authorityList=new ArrayList<>();
//		authorityList.add(createAuthority("ADMIN","Admin role"));
//		User user=new User();
//		user.setUserName("niraj101");
//		user.setFirstName("Niraj");
//		user.setLastName("Kumar");
//		user.setPassword(passwordEncoder.encode("niraj@101"));
//		user.setEnabled(true);
//		user.setAuthorities(authorityList);
//		userRepository.save(user);
//
//
//		authorityList=new ArrayList<>();
//		authorityList.add(createAuthority("USER","User role"));
//		user=new User();
//		user.setUserName("roshan101");
//		user.setFirstName("Roshan");
//		user.setLastName("Singh");
//		user.setPassword(passwordEncoder.encode("roshan@101"));
//		user.setEnabled(true);
//		user.setAuthorities(authorityList);
//		userRepository.save(user);
//	}


	private Authority createAuthority(String roleCode,String roleDescription) {
		Authority authority=new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}

}
