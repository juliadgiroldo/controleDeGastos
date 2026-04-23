using Microsoft.AspNetCore.Mvc;

public interface ICategoryUseCase
{
    Task<ActionResult<CategoryDto>> Get();

    Task<ActionResult<CategoryDto>> CreateCategory(Category category);

}