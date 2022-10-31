package in.nirajkumar.MyMart.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JWTTokenHelper jwtTokenHelper;
    @Autowired
    public JWTAuthenticationFilter(UserDetailsService userDetailsService,JWTTokenHelper jwtTokenHelper) {
        this.userDetailsService=userDetailsService;
        this.jwtTokenHelper=jwtTokenHelper;

    }


    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String authToken=jwtTokenHelper.getToken(httpServletRequest);

        if(null!=authToken) {

            String userName=jwtTokenHelper.getUsernameFromToken(authToken);

            if(null!=userName) {

                UserDetails userDetails=userDetailsService.loadUserByUsername(userName);

                if(jwtTokenHelper.validateToken(authToken, userDetails)) {
                    UsernamePasswordAuthenticationToken authentication=new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
                    authentication.setDetails(new WebAuthenticationDetails(httpServletRequest));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }

            }

        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
