using ServiceStack;
using ServiceStack.Auth;

namespace PersonalSite.Authorization {
    public class SiteAuthProvider : ServiceStack.Auth.CredentialsAuthProvider
    {

        public override object Authenticate(IServiceBase authService, IAuthSession session, Authenticate request)
        {
            session.Email = "fatih";
            return base.Authenticate(authService, session, request);
        }
    }
}