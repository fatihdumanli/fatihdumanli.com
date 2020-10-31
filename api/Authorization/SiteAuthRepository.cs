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
            throw new System.NotImplementedException();
        }

        public void DeleteUserAuth(string userAuthId)
        {
            throw new System.NotImplementedException();
        }

        public IUserAuth GetUserAuth(string userAuthId)
        {
            throw new System.NotImplementedException();
        }

        public IUserAuth GetUserAuth(IAuthSession authSession, IAuthTokens tokens)
        {
            return new UserAuth() { FirstName = "fatih"};
        }

        public IUserAuth GetUserAuthByUserName(string userNameOrEmail)
        {
            throw new System.NotImplementedException();
        }

        public List<IUserAuthDetails> GetUserAuthDetails(string userAuthId)
        {
            throw new System.NotImplementedException();
        }

        public void LoadUserAuth(IAuthSession session, IAuthTokens tokens)
        {
            throw new System.NotImplementedException();
        }

        public void SaveUserAuth(IAuthSession authSession)
        {
            throw new System.NotImplementedException();
        }

        public void SaveUserAuth(IUserAuth userAuth)
        {
            throw new System.NotImplementedException();
        }

        /// <summary>
        /// To validate given credentials are valid.
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <param name="userAuth"></param>
        /// <returns></returns>
        public bool TryAuthenticate(string userName, string password, out IUserAuth userAuth)
        {
            userAuth = new UserAuth();

            var passwordHash = password.ToMD5Hash();
            var result = _context.Users.Where(u => u.Email == userName && u.Password == passwordHash);

            return true;
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