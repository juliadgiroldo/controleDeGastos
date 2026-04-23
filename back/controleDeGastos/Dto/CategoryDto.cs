public class CategoryDto{
    public int Id { get; set; }
    public string Description{ get; set; } = string.Empty;
    public TransactionPurpose transactionType { get; set; }
}