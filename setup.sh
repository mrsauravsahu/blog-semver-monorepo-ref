for srv in `ls -1 apps`; do
  for common_file in `find common -type f`; do
    outfile=`echo $common_file | sed "s|^common|apps/$srv|"`
    mkdir -p `dirname $outfile`; cat $common_file | sed "s/{{PROJECT}}/$srv/" > $outfile
  done
done