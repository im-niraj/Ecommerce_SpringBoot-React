package in.nirajkumar.MyMart.service.Implementation;

import in.nirajkumar.MyMart.Dao.AddressRepository;
import in.nirajkumar.MyMart.Dao.AuthorityRepository;
import in.nirajkumar.MyMart.Dao.CartRepository;
import in.nirajkumar.MyMart.Dao.UserRepository;
import in.nirajkumar.MyMart.Model.Address;
import in.nirajkumar.MyMart.Model.Authority;
import in.nirajkumar.MyMart.Model.Cart;
import in.nirajkumar.MyMart.Model.User;
import in.nirajkumar.MyMart.requests.NewUserRequest;
import in.nirajkumar.MyMart.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String createNewAccount(NewUserRequest newUserRequest) {
        ModelMapper modelMapper = new ModelMapper();
        User user = modelMapper.map(newUserRequest, User.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (newUserRequest.getIsAdmin()){
            Authority authority = authorityRepository.findByRoleCode("ADMIN");
            if(authority == null){
                user.addAuthority().add(createAuthority("ADMIN", "Admin Role"));
            }
            else{
                user.addAuthority().add(authority);
            }
        }
        else{
            Authority authority = authorityRepository.findByRoleCode("USER");
            if(authority == null){
                user.addAuthority().add(createAuthority("USER", "User Role"));
            }
            else{
                user.addAuthority().add(authority);
            }
        }
        Address address = modelMapper.map(newUserRequest, Address.class);
        User userSaved = userRepository.save(user);
        address.setUser(userSaved);
        addressRepository.save(address);
        userRepository.save(userSaved);
        return "New account create successfully...";
    }

    @Override
    public String addAddressToUser(Address address, int userid) {
        return null;
    }

    @Override
    public String updateUserRecord(NewUserRequest newUserRequest, int userId) {
        return null;
    }

	private Authority createAuthority(String roleCode,String roleDescription) {
		Authority authority=new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
        return authorityRepository.save(authority);
	}

}
