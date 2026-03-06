using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Lab3.Pages; // Fotoğrafta MyRazorAuthApp.Pages görünüyor, projenize göre düzenleyebilirsiniz.

public class IndexModel : PageModel
{
    // Fotoğraftaki gibi dizileri tanımlıyoruz
    public string[] StudentNames { get; private set; } = [];
    public int[] MidtermGrades { get; private set; } = [];
    public int[] FinalGrades { get; private set; } = [];
    public string[] LetterGrades { get; private set; } = [];

    // Verilerin post işleminden sonra kaybolmaması için 
    // gerçek uygulamada veritabanı kullanılır. Şimdilik örnek verileri burada tutuyoruz.
    public void OnGet()
    {
        StudentNames = new[] { "Ayşe", "Mehmet", "Zeynep" };
        MidtermGrades = new[] { 70, 55, 90 };
        FinalGrades = new[] { 80, 60, 75 };
        LetterGrades = new[] { "-", "-", "-" };
    }

    public IActionResult OnPostCalculate()
    {
        // Dizileri tekrar dolduruyoruz (Post işleminde stateless yapı gereği)
        StudentNames = new[] { "Ayşe", "Mehmet", "Zeynep" };
        MidtermGrades = new[] { 70, 55, 90 };
        FinalGrades = new[] { 80, 60, 75 };
        
        string[] calculatedLetters = new string[StudentNames.Length];

        for (int i = 0; i < StudentNames.Length; i++)
        {
            double average = (MidtermGrades[i] * 0.4) + (FinalGrades[i] * 0.6);
            calculatedLetters[i] = GetLetterGrade(average);
        }

        LetterGrades = calculatedLetters;
        return Page();
    }

    private string GetLetterGrade(double score)
    {
        return score switch
        {
            >= 90 => "AA",
            >= 80 => "BA",
            >= 70 => "BB",
            >= 60 => "CB",
            >= 50 => "CC",
            _ => "FF"
        };
    }
}