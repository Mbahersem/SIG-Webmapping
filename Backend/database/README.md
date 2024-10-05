# MLDR
Ainsi, on retrouve le modèle logique de données relationnelles de notre base de données : 
```markdown
Electeur(**id_elec**, nom, prenom, id_cni, date_insc, date_naiss, vote, *#nom_bureau*)
Bureau_de_vote(**nom**, arrondissement, geom)
Parti(**id_parti**, nom_parti, candidat)
Compter_bureau_parti(***#nom_bureau, #id_parti***, nombre_voies)
```