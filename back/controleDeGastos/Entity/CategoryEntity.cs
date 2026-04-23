using System.ComponentModel.DataAnnotations;

public class Category
{
    public int Id { get; set; }
    [Required]
    public string Description { get; set; } = string.Empty;
    [Required]
    public TransactionPurpose transactionPurpose { get; set; } 

}