using Microsoft.AspNetCore.Mvc;

public interface ITransactionUseCases
{
    Task<ActionResult<TransactionDto>> Get();

    Task<ActionResult<TransactionDto>> CreateTransaction(Transaction transaction);

}