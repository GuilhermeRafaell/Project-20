export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container text-center space-y-3">
        <p className="text-muted-foreground italic text-sm">
          "A dor do treino é temporária, a glória da conquista é eterna."
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} — Feito com 🧡 e muito café.
        </p>
      </div>
    </footer>
  );
}
