using System.Security.Cryptography;
using System.Text;

namespace PersonalSite.Extensions
{
    public static class StringExtensions
    {
        public static string ToMD5Hash(this string phrase)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            md5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(phrase));
            byte[] result = md5.Hash;
            StringBuilder strBuilder = new StringBuilder();
            for (int i = 0; i < result.Length; i++)
            {
                strBuilder.Append(result[i].ToString("x2"));
            }

            return strBuilder.ToString();
        }

        public static void ToEnglish(this string phrase)
        {
            phrase = phrase.Replace('ı', 'i');
        }
    }
}