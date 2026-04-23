using System.ComponentModel.DataAnnotations;

public class TransactionDto
{
    public int Id { get; set; }
    public string Description { get; set; } = string.Empty;
    public float Value { get; set; } 
    public TransactionPurpose TransactionType { get; set; }
    public Category Category { get; set; }
    public User User { get; set;}

}