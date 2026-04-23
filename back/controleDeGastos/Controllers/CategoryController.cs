using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/category")]
public class CategoryController
{
    private readonly ICategoryUseCase _categoryUseCase;

    public CategoryController(ICategoryUseCase categoryUseCase)
    {
        _categoryUseCase = categoryUseCase;
    }

    [HttpGet]
    public async Task<ActionResult<CategoryDto>> Get()
    {
        return await _categoryUseCase.Get();
    }
    [HttpPost]
    public async Task<ActionResult<CategoryDto>> CreateUser([FromBody] Category category)
    {
        return await _categoryUseCase.CreateCategory(category);
    }
}