# MLDR
Ainsi, on retrouve le modèle logique de données relationnelles de notre base de données : 
```markdown
Electeur(**id_elec**, nom, prenom, id_cni, date_insc, date_naiss, vote, *#nom_bureau*)
Scrutateur(**id_scrut**, nom_scrut, date_naiss_scrut, *#nom_bureau*, *#id_admin*)
Administrateur(**id_admin**, nom_admin, date_naiss_admin)
Bureau_de_vote(**nom**, arrondissement, geom)
Candidat(**id_parti**, nom_parti, nom_candidat)
Compter_bureau_parti(***#nom_bureau, #id_parti***, nombre_voies)
```