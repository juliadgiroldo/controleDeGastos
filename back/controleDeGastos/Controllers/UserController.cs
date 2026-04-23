using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/user")]
public class UserController
{
    private readonly IUserUseCase _userUseCase;

    public UserController(IUserUseCase userUseCase)
    {
        _userUseCase = userUseCase;
    }

    [HttpGet]
    public async Task<ActionResult<UserDto>> Get()
    {
        return await _userUseCase.Get();
    }
    [HttpPost]
    public async Task<ActionResult<UserDto>> CreateUser([FromBody] User user)
    {
        return await _userUseCase.CreateUser(user);
    }

    [HttpPut]
    public async Task<ActionResult<UserDto>> UpdateUser([FromBody] User user)
    {
        return await _userUseCase.UpdateUser(user);
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteUser(int id)
    {
        // Opcional: Validar se o ID existe antes de deletar
        await _userUseCase.DeleteUser(id);
        
    }
}