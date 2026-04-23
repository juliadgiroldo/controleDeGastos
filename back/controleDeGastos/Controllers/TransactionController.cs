using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/transaction")]
public class TransactionController
{
    private readonly ITransactionUseCases _transactionUseCase;

    public TransactionController(ITransactionUseCases transactionUseCase)
    {
        _transactionUseCase = transactionUseCase;
    }

    [HttpGet]
    public async Task<ActionResult<TransactionDto>> Get()
    {
        return await _transactionUseCase.Get();
    }
    [HttpPost]
    public async Task<ActionResult<TransactionDto>> CreateUser([FromBody] Transaction transaction)
    {
        return await _transactionUseCase.CreateTransaction(transaction);
    }
}