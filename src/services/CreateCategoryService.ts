import {getRepository} from 'typeorm'

interface Service{
  category: 
}

class Category {

  public async createCategory(category) {

    const categoryRepository = getRepository(Category);

    let transactionCategory = await categoryRepository.findOne({
      where: {
        description: category,
      },
    });

    if (!transactionCategory) {
      // não existe? crio ela
      transactionCategory = categoryRepository.create({
        description: caltegory,
      });
      await categoryRepository.save(transactionCategory);
    }
  }




    public async setValueCategory{

    }
}




export default Category
