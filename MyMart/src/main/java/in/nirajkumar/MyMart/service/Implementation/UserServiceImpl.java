package in.nirajkumar.MyMart.service.Implementation;

import in.nirajkumar.MyMart.Dao.AddressRepository;
import in.nirajkumar.MyMart.Dao.AuthorityRepository;
import in.nirajkumar.MyMart.Dao.CartItemRepository;
import in.nirajkumar.MyMart.Dao.UserRepository;
import in.nirajkumar.MyMart.Model.*;
import in.nirajkumar.MyMart.dto.requests.NewUserRequest;
import in.nirajkumar.MyMart.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartItemRepository cartRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String createNewAccount(NewUserRequest newUserRequest) {
        ModelMapper modelMapper = new ModelMapper();
        Address address = modelMapper.map(newUserRequest, Address.class);
        if (newUserRequest.getIsAdmin()){
            Seller seller = modelMapper.map(newUserRequest, Seller.class);
            seller.setPassword(passwordEncoder.encode(seller.getPassword()));
            seller.setCreatedAt(new Date());
            Authority authority = authorityRepository.findByRoleCode("ADMIN");
            if(authority == null){
                seller.addAuthority().add(createAuthority("ADMIN", "Admin Role"));
            }
            else{
                seller.addAuthority().add(authority);
            }
//            userRepository.save(seller);
            address.setUser(userRepository.save(seller));
            addressRepository.save(address);
            return "New account create successfully...";
        }
        else{
            Buyer buyer = modelMapper.map(newUserRequest, Buyer.class);
            buyer.setPassword(passwordEncoder.encode(buyer.getPassword()));
            buyer.setCreatedAt(new Date());
            Authority authority = authorityRepository.findByRoleCode("USER");
            if(authority == null){
                buyer.addAuthority().add(createAuthority("USER", "User Role"));
            }
            else{
                buyer.addAuthority().add(authority);
            }
            address.setUser(userRepository.save(buyer));
            addressRepository.save(address);
            return "New account create successfully...";
        }
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
