using System.ComponentModel.DataAnnotations;

public class Transaction
{
    public int Id { get; set; }
    [Required]
    public string Description { get; set; } = string.Empty;
    [Required]
    public float Value { get; set; } 
    [Required]
    public TransactionPurpose TransactionType { get; set; }
    [Required]
    public Category Category { get; set; }
    [Required]
    public User User { get; set;}

}