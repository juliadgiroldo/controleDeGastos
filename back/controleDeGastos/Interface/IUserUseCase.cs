using Microsoft.AspNetCore.Mvc;

public interface IUserUseCase
{
    Task<ActionResult<UserDto>> Get();

    Task<ActionResult<UserDto>> CreateUser(User user);

    Task<ActionResult<UserDto>> UpdateUser(User user);
    Task<IActionResult> DeleteUser(int id);
}