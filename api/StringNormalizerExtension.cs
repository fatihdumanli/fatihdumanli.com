namespace LandingAPI
{
    public static class StringNormalizerExtension 
    {
        public static void ToEnglish(this string phrase)
        {
            phrase = phrase.Replace('ı', 'i');
        }
    }
}