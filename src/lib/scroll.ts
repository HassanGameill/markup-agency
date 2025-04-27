export function ScrollIntoView({
    id,
    behavior = 'smooth',
    block = 'start'
}: { id: string; behavior?: ScrollBehavior; block?: ScrollLogicalPosition }) {
    if (!id) return;
    
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior, block });
    }
}
