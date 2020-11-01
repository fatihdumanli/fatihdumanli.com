using System.Collections.Generic;
using System.Linq;
using LandingAPI;
using LandingAPI.Persistance;
using PersonalSite.Extensions;
using ServiceStack.Auth;

namespace PersonalSite.Authorization
{
    public class SiteAuthRepository : IUserAuthRepository
    {
        private readonly SiteInformationDbContext _context;

        public SiteAuthRepository()
        {
            _context = new SiteInformationDbContext();            
        }

        public IUserAuthDetails CreateOrMergeAuthSession(IAuthSession authSession, IAuthTokens tokens)
        {
            throw new System.NotImplementedException();
        }

        public IUserAuth CreateUserAuth(IUserAuth newUser, string password)
        {
            var user = new Model.User() {
                Firstname = newUser.FirstName,
                Lastname = newUser.LastName,
                Email = newUser.Email,
                Password = newUser.PasswordHash
            };

            _context.Users.Add(user);
            _context.SaveChanges();
            return newUser;
        }

        public void DeleteUserAuth(string userAuthId)
        {
            var userAuth = _context.Users.Where(u => u.Id.ToString() == userAuthId).SingleOrDefault();
            _context.Users.Remove(userAuth);
            _context.SaveChanges();
        }

        public IUserAuth GetUserAuth(string userAuthId)
        {
            throw new System.NotImplementedException();
        }

        public IUserAuth GetUserAuth(IAuthSession authSession, IAuthTokens tokens)
        {
            return new UserAuth() {
                FirstName = authSession.FirstName,
                LastName = authSession.LastName,
                Email = authSession.Email
            };
        }

        public IUserAuth GetUserAuthByUserName(string userNameOrEmail)
        {
            var user = _context.Users.Where(u => u.Username == userNameOrEmail || u.Email == userNameOrEmail).SingleOrDefault();
            return new UserAuth() {
                FirstName = user.Firstname,
                LastName = user.Lastname,
                Email = user.Email,
                PasswordHash = user.Password
            };
        }

        public List<IUserAuthDetails> GetUserAuthDetails(string userAuthId)
        {
            throw new System.NotImplementedException();
        }

        public void LoadUserAuth(IAuthSession session, IAuthTokens tokens)
        {

        }

        public void SaveUserAuth(IAuthSession authSession)
        {
            throw new System.NotImplementedException();
        }

        public void SaveUserAuth(IUserAuth userAuth)
        {
            throw new System.NotImplementedException();
        }

        //        
        public bool TryAuthenticate(string userName, string password, out IUserAuth userAuth)
        {
            userAuth = null;

            var passwordHash = password.ToMD5Hash();
            var userResult = _context.Users.Where(u => u.Username == userName).SingleOrDefault();

            if(userResult == null)
            {
                return false;
            }

            if(userResult.Password.Equals(passwordHash))
            {
                userAuth = new UserAuth() {
                    FirstName = userResult.Firstname,
                    LastName = userResult.Lastname,
                    Email = userResult.Email,         
                };

                return true;
            }

            return false;
        }

        public bool TryAuthenticate(Dictionary<string, string> digestHeaders, string privateKey, int nonceTimeOut, string sequence, out IUserAuth userAuth)
        {
            throw new System.NotImplementedException();
        }

        public IUserAuth UpdateUserAuth(IUserAuth existingUser, IUserAuth newUser)
        {
            throw new System.NotImplementedException();
        }

        public IUserAuth UpdateUserAuth(IUserAuth existingUser, IUserAuth newUser, string password)
        {
            throw new System.NotImplementedException();
        }
    }
}