import { Container } from "@/shared/components/container";
import { RecipeList } from "./ui/recipe-list";

export default function RecipeListPage() {
  return (
    <Container className="py-8 space-y-4">
      <h1 className="text-2xl font-bold">Recipes</h1>
      <RecipeList />
    </Container>
  );
}
